<script setup>
import movies from './movies.data.json'
import MovieItem from './MovieItem.vue'
import Checkbox from './Checkbox.vue'
import { ref, computed } from 'vue'

const concluded = ref(false)
const current = ref(false)
const search = ref('')
const sortBy = ref('imdbRating-desc')
const type = ref(null)

const filteredMovies = computed(() => {
  let filtered = [...movies]

  if (type.value === 'movies') {
    filtered = filtered.filter(movie => movie.Type === 'movie')
  } else if (type.value === 'series') {
    filtered = filtered.filter(movie => {
      if (movie.Type === 'series') {
        if (current.value) {
          return movie.Year.endsWith('–')
        } else if (concluded.value) {
          return !movie.Year.endsWith('–')
        } else {
          return true
        }
      }
      return false
    })
  }

  return applyLimit(applyFilters(filtered))
})

function applyFilters(movies) {
  return filterSort(filterSearch(movies))
}

function applyLimit(movies) {
  const searchValue = search.value.toLowerCase().trim()
  if (searchValue.includes(':')) {
    const [field, value] = searchValue.split(':')
    const trimmedValue = value.trim()
    switch (field) {
      case 'limit':
        return movies.splice(0, trimmedValue)
    }
  }
  return movies
}

function filterSort(movies) {
  const [field, order] = sortBy.value.split('-')
  const sortedMovies = [...movies]

  sortedMovies.sort((a, b) => {
    const _a = a[field].toLowerCase()
    const _b = b[field].toLowerCase()
    return order === 'asc' ? _a.localeCompare(_b) : _b.localeCompare(_a)
  })

  return sortedMovies
}

function filterSearch(movies) {
  const searchValue = search.value.toLowerCase().trim()

  if (searchValue.includes(':')) {
    const [field, value] = searchValue.split(':')
    const trimmedValue = value.trim()

    switch (field) {
      case 'genre':
        return movies.filter(movie => movie.Genre.toLowerCase().includes(trimmedValue))
      case 'actor':
        return movies.filter(movie => movie.Actors.toLowerCase().includes(trimmedValue))
      case 'director':
        return movies.filter(movie => movie.Director.toLowerCase().includes(trimmedValue))
      case 'title':
        return movies.filter(movie => movie.Title.toLowerCase().includes(trimmedValue))
      default:
        return movies
    }
  }

  return movies.filter(movie =>
    Object.values(movie).some(val =>
      typeof val === 'string' && val.toLowerCase().includes(searchValue),
    ),
  )
}

</script>

<template>
  <div class="m-6">
    <div class="space-y-4">
      <div class="flex items-center justify-start space-x-2">
        <button type="button" class="rounded-full bg-gray-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-indigo-500" :class="{'bg-indigo-600 dark:bg-indigo-600': type === null}" @click="type = null">
          All
        </button>
        <button type="button" class="rounded-full bg-gray-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-indigo-500" :class="{'bg-indigo-600 dark:bg-indigo-600': type === 'movies'}" @click="type = 'movies'">
          Movies
        </button>
        <button type="button" class="rounded-full bg-gray-400 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-indigo-500" :class="{'bg-indigo-600 dark:bg-indigo-600': type === 'series'}" @click="type = 'series'">
          Series
        </button>

        <select v-model="sortBy" class="DocSearch DocSearch-Button w-auto">
          <option disabled>
            Sort by
          </option>
          <option value="Title-asc">
            Title asc
          </option>
          <option value="Title-desc">
            Title desc
          </option>
          <option value="Year-asc">
            Year asc
          </option>
          <option value="Year-desc">
            Year desc
          </option>
          <option value="imdbRating-asc">
            IMDB Rating asc
          </option>
          <option value="imdbRating-desc">
            IMDB Rating desc
          </option>
        </select>

        <div class="relative grow">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            v-model="search"
            type="search"
            class="DocSearch DocSearch-Button pl-10"
            placeholder="genre: sci-fi actor: john candy director: john hughes limit: 10"
          >
        </div>
      </div>

      <div v-show="type === 'series'" class="flex items-center justify-start space-x-4 py-2 text-sm font-medium text-slate-700">
        <label>
          <Checkbox v-model:checked="current" @click="concluded = false" /> Current
        </label>
        <label>
          <Checkbox v-model:checked="concluded" @click="current = false" /> Concluded
        </label>
      </div>

      <div class="text-sm font-medium text-slate-700 dark:text-slate-400">
        {{ filteredMovies.length }} items. These are some of my favourite movie and tv recommendations. The list is limited to 250 movies and 150 series (<a class="text-blue-600" href="/movies/changelog/">changelog</a>). I think it makes it more interesting if the list is limited. There are so many more good movies and tv shows, some are intentionally not on the list, but some are not on the list because I simply didn't think of them yet.
      </div>
    </div>
    <div class="mt-2 grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
      <MovieItem
        v-for="movie in filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

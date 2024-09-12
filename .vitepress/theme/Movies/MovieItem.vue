<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const runtime = computed(() => {
  if (props.movie.Type === 'series') {
    if (props.movie.totalSeasons && props.movie.totalSeasons !== 'N/A') {
      return props.movie.totalSeasons + ' seasons'
    }
    return ''
  }
  return props.movie.Runtime
})

const rtRating = computed(() => {
  const ratings = props.movie.Ratings.filter(r => r.Source === 'Rotten Tomatoes')
  if (ratings && ratings.length === 1) {
    return ratings[0].Value
  }
  return ''
})

const imdbUrl = computed(() => {
    return 'https://www.imdb.com/title/' + props.movie.imdbID + '/'
})

const USE_LOCAL_POSTER = true

const poster = computed(() => {
  return USE_LOCAL_POSTER
    ? props.movie.Poster.replace('https://m.media-amazon.com/images/M/', '/assets/images/').replace('.jpg', '.webp')
    : props.movie.Poster
})
</script>

<template>
  <div class="relative flex flex-col justify-between">
    <div>
      <a :href="imdbUrl">
        <img :src="poster" class="rounded-md" :alt="movie.Title" loading="lazy">
    </a>
    </div>
    <div class="mt-2 space-y-2">
      <h2 :title="movie.Title" class="truncate font-semibold text-slate-900 dark:text-slate-200">
        {{ movie.Title }}
      </h2>
      <div class="space-y-2 text-sm text-slate-700 dark:text-slate-400">
        <div class="truncate">
          {{ movie.Year }}, {{ runtime }}, {{ movie.Type }}
        </div>
        <div class="truncate">
          {{ movie.Genre }}
        </div>
        <div class="truncate">
          <template v-if="rtRating">
            RT {{ rtRating }} /
          </template>
          <a :href="imdbUrl">IMDB {{ movie.imdbRating }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

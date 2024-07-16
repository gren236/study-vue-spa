<script setup lang="ts">
import { ref } from 'vue'
import JobsList from '@/components/JobsList.vue'
import Job from './types/Job'

const jobs = ref<Job[]>([
    { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1' },
    { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2' },
    { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3' },
    { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4' },
    { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5' }
])
</script>

<template>
    <div class="app">
        <JobsList :jobs="jobs"></JobsList>
    </div>
</template>

<style></style>

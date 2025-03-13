<template>
    <div class="post-tags" v-if="tags && tags.length">
        <span class="tag-label">标签：</span>
        <a v-for="tag in tags" :key="tag" :href="withBase(`/tags?tag=${tag}`)" class="tag">
            {{ tag }}
        </a>
    </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
defineProps<{
    tags: string[]
}>();
</script>

<style scoped>
.post-tags {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag-label {
    color: var(--vp-c-text-2);
    font-size: 0.9em;
}

.tag {
    display: inline-block;
    padding: 0.2rem 0.8rem;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--vp-c-brand);
    background-color: var(--vp-c-brand-dimm);
    text-decoration: none;
    transition: background-color 0.2s;
}

.tag:hover {
    background-color: var(--vp-c-brand-soft);
}
</style>
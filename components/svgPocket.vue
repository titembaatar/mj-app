<template>
  <g>
    <path
      id="basePocket"
      :fill="jeans.pocketColor"
      d="M3 12s-18 217 33 407l214 81 214-81c51-187 33-407 33-407z"
    />
    <path
      fill="none"
      stroke="#eb6100"
      stroke-dasharray="11 3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.2"
      d="M438 11c43 249 0 387 0 387l-189 75-189-75S17 258 62 3H13l-1 10S-5 228 44 411l205 79 206-79c48-186 31-398 31-398l-3-12"
    />
    <path
      fill="none"
      stroke="#fff100"
      stroke-dasharray="11 3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.2"
      d="M498 28H3M499 49H3"
    />
    <path
      v-if="stitch"
      v-show="jeans.stitch"
      id="stitchDotan"
      fill="#dbdf01"
      d="M368 12l4 10h2l-3-10h-3zm47 2h-3l4 11 3-1-4-10zm-39 12h-3l3 11 3-1-3-10zm44 2l-3 1 3 11 3-1-3-11zm-40 13h-3l3 11h2l-2-11zm44 2l-3 1 3 11 3-1-3-11zm-41 13h-3l2 11h3v-1l-2-10zm44 2l-2 1 1 11h3v-1l-2-11zm-41 13l-3 1 1 10v1l3-1v-1l-1-10zm44 3h-3l1 10v1h3v-1l-1-10zm-43 13h-2v11h3v-2l-1-9zm44 2h-2v12h3v-2l-1-10zm-43 13h-3l1 9-1 11 3 1v-12h-1 1v-9zm44 3h-2v9l-1 11h3l1-11h-2 2l-1-9zm-47 22l-1 11h3l1-11h-3zm44 2v11l2 1 1-12h-3zm-45 13l-1 11 2 1 2-12h-3zm44 3l-1 11h3l1-11h-3zm-46 12l-2 11 3 1 2-11-3-1zm44 3l-2 11h3l2-11h-3zm-47 12l-2 11 2 1 3-11-3-1zm44 3l-2 11 2 1 3-11-3-1zm-47 12l-3 11h-1l3 1 3-11-2-1zm44 3l-3 10v1l2 1v-1l3-10-2-1zm-49 12l-3 9-1 2 3 1 1-2 3-9-3-1zm44 3l-3 9v1l2 1 1-1 3-9-3-1zm-49 12l-3 7-1 3 2 1 1-2 3-8-2-1zm44 2l-3 8-1 3 2 1 1-3h1l3-8-3-1zm-50 12l-3 6-2 4 3 1 2-3 2-7-2-1zm44 2l-3 7-2 4 3 1 2-4 3-6-3-2zm-51 12l-2 5-3 5 2 1 3-5 3-5-3-1zm44 2l-2 6-3 4 2 2 3-5 3-5-3-2zm-51 11l-2 4-4 6 2 1 4-5v-1l2-3-2-2zm44 3l-2 4-4 5 2 2 4-6 2-4-2-1zm-52 10l-2 3-5 7 3 1 4-7 2-2-2-2zm44 3l-2 2-5 7 3 2 4-7 2-3-2-1zm-53 10l-1 1-6 8 2 2 6-8 1-1-2-2zm44 3l-1 1-6 7 2 2 6-7 1-2-2-1zm-54 9l-7 9 2 1 7-8h1l-3-2zm44 3l-7 8 2 2 8-8v-1l-3-1zm-54 9l-8 8 3 2 7-8-2-2zm44 2l-7 8 2 2 7-8-2-2zm-54 9l-9 8 2 2 8-8-1-2zm44 2l-9 8 2 2 9-8-2-2zm-56 8l-7 7-1 1 1 2 2-1 7-7-2-2zm44 3l-7 6-1 1 2 2 1-1 7-6-2-2zm-56 7l-6 5-2 2 1 2 2-1h1l6-6-2-2zm45 3l-7 5-2 2 1 2 3-2 6-5-1-2zm-57 6l-6 4-3 3 1 2 4-2 6-4-2-3zm44 3l-5 4-4 2 1 3 4-3 6-4-2-2zm-57 6l-4 3-5 3 1 2 5-3 5-3-2-2zm44 3l-4 3-5 2 1 3 5-3 5-3-2-2zm-57 5l-4 2-6 3 1 3 7-4 3-2-1-2zm44 3l-3 2-7 3 2 2 6-3 4-2-2-2zm-58 4l-2 1-8 4 1 2 8-3 3-1-2-3zm45 3l-3 1-8 3 2 3 7-3 3-2-1-2zm-59 4h-1l-9 4 1 2 9-3 2-1-2-2zm45 2l-2 1-9 3 1 3 9-4h2l-1-3zm-227 1l1 3v-2l-1-1zm168 2l-10 4v3l11-4-1-3zm-163 0l-1 3 7 3 4 1 1-3-4-1-7-3zm207 3l-10 4 1 2 10-3-1-3zm-58 2l-11 3 1 3 10-3v-3zm-134 1l-1 2 6 2 5 2 1-3-6-1-5-2zm178 2l-11 3 1 3 10-3v-3zm-59 1l-11 3v3l11-3v-3zm-104 1l-1 3 5 1 6 2v-3l-6-1-4-2zm-30 1v3l4 1 7 1v-3l-7-1-4-1zm178 1l-11 2 1 3 10-2v-3zm-59 1l-11 2v2l11-2v-2zm-74 1l-1 3 4 1h1-3v2h2l9 1v-3h-2l1-2-8-1-3-1zm-29 0l-1 3h3l8 2 1-3-8-1h-1l-2-1zm87 1l-10 2h-1l1 2 11-1-1-3zm60 0l-11 2v3l11-2v-3zm-132 1l-1 3h3l9 1v-3h-9l-2-1zm29 1l-1 3h3v1h11v-3h-6l-4-1h-3zm28 0l-10 1h-1v1h-2v3h2l9 1v-3h2v-3zm60 1l-11 1h-1l1 3 11-1v-3zm-16 2h-11v3h1l10-1v-2zm-42 0v3h11v-2l-9-1h-2zm27 0l-10 1h-1v2l1 1 10-1v-3z"
    />
    <path
      v-if="sp"
      id="spup"
      :fill="jeans.stripeUpFill"
      d="M0 120l3 80h494l3-80z"
    />
    <path
      v-if="sp"
      id="spdwn"
      :fill="jeans.stripeDwnFill"
      d="M6 245l5 45h478l5-45z"
    />
  </g>
</template>

<script>
export default {
  props: {
    stitch: { type: Boolean, required: true, default: false },
    sp: { type: Boolean, required: true, default: false },
    jeans: undefined,
  },
}
</script>

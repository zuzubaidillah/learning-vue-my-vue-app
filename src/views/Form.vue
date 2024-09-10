<script>
export default {
  name: "Form",
  data() {
    return {
      filterGrade: null,
      formData: {
        id: null,
        name: null,
        email: null,
        class: 5,
      },
      listClass2: ['X-RPL', 'X-MM'],
      listClass: [
        {
          id: 1,
          name: "X-RPL",
          grade: 10
        },
        {
          id: 2,
          name: "X-MM",
          grade: 10
        },
        {
          id: 3,
          name: "XI-RPL",
          grade: 11
        },
        {
          id: 4,
          name: "XI-MM",
          grade: 11
        },
        {
          id: 5,
          name: "XII-RPL",
          grade: 12
        },
        {
          id: 6,
          name: "XII-MM",
          grade: 12
        },
      ]
    }
  },
  computed: {

    listClassComputed() {
      if (this.filterGrade) {
        /*return this.listClass.filter((item) => {
          return item.grade === this.filterGrade
        })*/
        return this.listClass.filter((item) => item.grade === parseInt(this.filterGrade))
      }

      return this.listClass
    },

    listClass2Computed() {
      return this.filterGrade ? this.listClass.filter(item => item.grade === parseInt(this.filterGrade)) : this.listClass;
    }

  }
}
</script>

<template>
  <div class="flex-1 p-6">
    <div class="flex items-center justify-between mb-3">
      <h1 class="text-2xl">Horizontal fields layout and advanced
        controls</h1>
    </div>
    <div class="grid grid-cols-1 last:mb-0 mb-6 lg:gap-6 lg:grid-cols-5">
      <label class="block font-bold mb-2 lg:mb-0">Fields</label>
      <div class="lg:col-span-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="">
          <div class="relative border-gray-700  border-t border-b rounded border-l border-r">
            <input
              v-model="formData.name"
              placeholder="Name" type="text"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none w-full h-12 border-0 border-gray-700  rounded pl-10"><span
            class="inline-flex justify-center items-center w-10 h-12 absolute top-0 z-10 left-0 pointer-events-none"><svg
            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
            <path
              fill="currentColor"
              d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg></span>
          </div>
          <div class="text-xs text-gray-500 mt-1">Your full name</div>
        </div>
        <div class="">
          <div class="relative border-gray-700  border-t border-b rounded border-l border-r">

            <input
              v-model="formData.email"
              placeholder="Email" type="email"
              class="px-3 py-2 max-w-full focus:ring focus:outline-none w-full h-12 border-0 border-gray-700  rounded pl-10 pr-10">
            <span
              class="inline-flex justify-center items-center w-10 h-12 absolute top-0 z-10 left-0 pointer-events-none"><svg
              viewBox="0 0 24 24" width="16" height="16" class="inline-block"><path fill="currentColor"
                                                                                    d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20"></path></svg></span><span
            class="inline-flex justify-center items-center w-10 h-12 absolute top-0 z-10 right-0 pointer-events-none"><svg
            viewBox="0 0 24 24" width="16" height="16" class="inline-block"><path fill="currentColor"
                                                                                  d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span>
          </div>
          <div class="text-xs text-gray-500  mt-1">Your e-mail</div>
        </div>
      </div>
    </div>

    <div>
      <label for="classSelect">Filter Grade</label>
      <br>
      <input v-model="filterGrade" class="border">
    </div>

    <div>
      <label for="classSelect">Choose a class:</label>
      <br>
      <select
        id="classSelect" v-model="formData.class">
        <option selected>Pilih Kelas</option>
        <option
          v-for="classItem in listClassComputed"
          :key="classItem.id"
          :value="classItem.id"
        >
          {{ classItem.name }} (Grade: {{ classItem.grade }})
        </option>
      </select>
    </div>

  </div>
  <pre>
    {{ filterGrade || 'emty' }}
    {{ formData }}
  </pre>
</template>

<style scoped>

</style>

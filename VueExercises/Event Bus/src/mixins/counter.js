import { ref } from "vue";

const counterFunction = () => {
  //Data
  const counter = ref(0);

  //Methods
  const increase = () => {
    counter.value++;
  };

  const decrease = () => {
    if (counter.value > 0) {
      counter.value--;
    }
  };

  return { counter, increase, decrease };
};

export default counterFunction;

import categoryHook from "./categoryHook";
import detailHook from "./detailHook";
import mealHook from "./mealHook";

//* hybridHook
//* It contains two hooks or more.
//* It will make your app clean code and flexible 🤡
//* It is just a single hook which has two or more hooks are combining in it.

const hybridHook = (url, category, id) => {
  if (url === "categoryUrl") {
    const { categories } = categoryHook();
    return { categories };
  }

  if (url === "mealUrl") {
    const { meals } = mealHook(category);
    return { meals };
  }

  if (url === "detailUrl") {
    const { detail } = detailHook(id);
    return { detail };
  }
};

export default hybridHook;

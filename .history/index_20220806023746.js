function saturdayFun(arg1 , arg2 = "bathe my dog") {
    console.log(`This Saturday, I want to ${arg1}!`);
  }
  saturdayFun(); //=> This Saturday, I want to roller-skate!
  saturdayFun(arg2);//=> This Saturday, I want to bathe my dog!
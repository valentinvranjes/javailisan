function Dog() {
    this.hasSat = false;
    this.bark = function()
    {
    return 'Wuf Wuf';
    }
    this.doSit = function()
    {
    this.hasSat =
    true;
    }
    }
    var dog = new Dog();
    dog.bark();
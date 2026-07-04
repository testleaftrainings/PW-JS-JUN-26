/* Absolute xpath:

(/html/body/div[2]/div[2]/div/form/p/input)[3]

*/

/* Syntax for writing relative xpath:

1. Basic Relative Xpath

=> 1. attribute based xpath syntax

//tagName[@attributeName = "attributeValue"]

example : (//input[@class="input"])[2]

=> 2. text based xpath syntax

//tagName[text()="text value present in the DOM"]

//h2[text()="Leaftaps Login"]

=> 3. partial attribute based xpath

//tagName[contains(@attributeName, "attributeValue")]

//input[contains(@id,"erna")]

=> 4. partial textbased xpath

//tagName[contains(text(),"partial text value present in the DOM")]


//Advanced Relativae Xpath: (Relationship based xpath or  Axes xpath)

1. Parent -> Child

(parent relative xpath)/ tagName of child

(//form[@id="login"]/p)[3]


2. GrandParent -> GrandChild

(grandparent relative xpath)// tagName of grandchild

(//form[@id="login"]//label)

3. Child -> Parent (In CSS this is not possible)

(Relative Xpath of child)/parent::parent Tag

//input[@id="username"]/parent::p

4. GrandChild -> GrandParent (In CSS this is not possible)

(Relative Xpath of child)/ancestor::grandParent Tag

//input[@id="username"]/ancestor::div


3. Elder Sibling -> Younger Sibling

//label[text()="Username"]/following-sibling::input

4. ElderCousin -> Younger Cousin

//label[text()="Username"]/following::input

5. Younger Sibling ->  Elder Sibling

//input[@id="password"]/preceding-sibling::label

6. YoungerCousin -> Elder Cousin

//input[@id="password"]/preceding::label

*/
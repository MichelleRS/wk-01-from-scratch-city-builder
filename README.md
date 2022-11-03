# Week 01 From Scratch City Builder

## Expected Layout

![wireframe](./assets/citybuilderwireframe.png)

### HTML

-   `header`>`h1` Plan your day!
-   `main`

-   `section #dropdown-section > #activities #food #drinks`

    -   `input` values: activities, food, drinks
    -   `img` 3 for each dropdown matching values above
    -   `#counter` to match each value above

-   `section #favorite`
    -   `input` "What's your favorite spot in Portland?"

### State (What we're keeping track of)

-   activities change counter (section 1)
-   food change counter (section 2)
-   drinks change counter (section 3)
-   favorite array (section 4)

### Events (Events that are changing)

-   activities select (on change, section 1)

    -   on change: increment counter and switch image

-   food select (on change, section 2)

    -   on change: increment counter and switch image

-   drinks select (on change, section 3)

    -   on change: increment counter and switch image

-   favorite add add button
    -   on click: push the input value into the array in state, display favorites in the array

## Workflow

-   Find pics
-   Research for/of loop

## Rubric

-   [] At least 3 dropdowns, with at least 3 options each. 6
-   [] On changing dropdowns, new images are displayed (1 point per dropdown) 6
-   [] The number of times each dropdown has changed is displayed to the user 2
-   [] An input with a button that allows the user to pick a slogan and displays to user 2
    **Functions**
-   [] Impure `displayStats(): attaches a string to the DOM describing how many times each dropdown has been changed` 2
-   [] Impure `displaySlogans() : clears DOM, loops through slogans, displays slogans on the page` 2

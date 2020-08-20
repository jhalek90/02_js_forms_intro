# Form Validation Exercise

## Table of Contents

* [Why tho?](#motivation)

* [What even is this?](#application)

* [Specifications](#specifications)

* [Bonus Round!](#goals)

## Motivation

This is an exercise to familiarize yourself with forms and inputs, validations, and error handling. This is also an intro to JavaScript and how you can use it to interact with the browser.

## Application

In this web page we have a character creation app! It is incomplete and you will need to use JavaScript to make it work. I've created a bunch of starter code for you.

## Specifications

1. Character name must only allow Alphanumeric characters (and hyphens).
2. Character name cannot be blank.
3. Character name has a maximum character limit. (30 should work)
4. Class mush be chosen from the dropdown menu.
5. When class is selected, stats on page (base stats, skills, unique abilities, description) must auto-populate from provided data.
6. When class is selected, Health and Magicka values are calculated and displayed on screen.
7. Health and Magicka values are not user-editable. (caveat, see bonus section)
8. Base Stats are not editable. (caveat, see bonus section)
9. Skills are editable with the following constraints:

    * A skill may not be greater than 10 over its original starting value.

    * A skill may not be lower than 5 below its original starting value.

    * A skill may not exceed 5x the governing attribute. (Example, a character with 10 Strength may not exceed a Heavy Armor skill level of 50.)

10. Strengths and Weaknesses should be displayed as lists.
11. Strengths and Weaknesses are not editable. (caveat, see bonus section)
12. Description is read only and should look amazing! (If I spent this much time writing all this stuff, the least you can do is make it look fancy!)
13. Action must be logged if a user attempts an illegal action. (See bonus)
14. Clicking "Create Character" button logs a new object containing ALL the relevant information (name, class, customizations, etc) to the console. (See Bonus);

## Goals

This challenge too easy for you? Here are some things you can do to add difficulty!

* Add bonus points a user can add to either HP/Magicka. Set a limit that prevents a user from adding them ALL to one set. As extra bonus find a was to keep the changes active as the user switches classes. (If they've added +2 HP while they were on the Knight, the switching to the less robust merchant should have the base merchant HP + 2 without the user having to re-add it.)

* Editable base stats, but enforce limits similar to HP/magicka. Can also set a maximum limit between highest and lowest value to prevent min-maxing. (e.g User has 20 strength and 0 wisdom.)

* Add a checkbox to form where a user can sacrifice 10 of their upgrade skill points to remove their weakness from the character sheet. Also must notify user if they do not have sufficient points to do this. (or disable the checkbox when the remaining points to spend drops below 10)

* Instead of logging errors, display them to the user.

* Swap "Create Character" with "Print my Character". Look into `window.print()` and print specific CSS media queries. (As opposed to screen displays)

* Style the ever-living heck out of this page. Look into CSS transitions, animations, color gradients, and css variables (custom properties).
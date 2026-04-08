# 🎴 Card System

## Data Structure

Cards data are stored in `cards.js`.

Each card contains:

* name (EN/MM)
* meaning (upright / reversed)
* image

Example:
{
    name: "The Fool",
    image: "...",
    meaning: {
        en: {
        ...
        },
        mm: {
        ...
        },
    }
}

## Card Selection

* All cards are rendered in the UI
* When user clicks a card:

  * Its index is saved in `selectedIndex`
  * The card gets a "selected" class

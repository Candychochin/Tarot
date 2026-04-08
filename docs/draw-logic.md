# 🔄 Draw Logic

## Shuffle

Cards are shuffled using:

array.sort(() => Math.random() - 0.5)

This provides a quick random order for the deck before drawing.

## Drawing Process

1. User selects a card
2. The selected card index is stored in selectedIndex
3. Clicks "Draw" button
4. The app retrieves the selected card data from the array
5. The result section displays the card information

## Modal Display

* After clicking the "Draw" Button:

  * Result modal opens
  * Shows:

    * Image
    * Name
    * Upright meaning or Reversed meaning
    
    
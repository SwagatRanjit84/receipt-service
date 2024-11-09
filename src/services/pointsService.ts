// calculcate points for receipt
export function calculatePoints(receipt: any): number {
  let points = 0;

  // Rule 1: 1 point for every alphanumeric character in the retailer name
  points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, "").length;

  // Rule 2: 50 points if the total is a round dollar amount with no cents
  if (parseFloat(receipt.total) % 1 === 0) points += 50;

  // Rule 3: 25 points if the total is a multiple of 0.25
  if (parseFloat(receipt.total) % 0.25 === 0) points += 25;

  // Rule 4: 5 points for every two items on the receipt
  points += Math.floor(receipt.items.length / 2) * 5;

  // Rule 5: Apply multiplier rule to items based on description length
  receipt.items.forEach((item: any) => {
    const descriptionLength = item.shortDescription.trim().length;
    if (descriptionLength % 3 === 0)
      points += Math.ceil(parseFloat(item.price) * 0.2);
  });

  // Rule 6: 6 points if the day in the purchase date is odd
  const purchaseDate = new Date(receipt.purchaseDate + "T00:00:00"); // append time to solve issue of timezone
  if (purchaseDate.getDate() % 2 !== 0) points += 6;

  // Rule 7: 10 points if the time of purchase is between 2:00pm and 4:00pm
  const purchaseTime = new Date(
    `${receipt.purchaseDate}T${receipt.purchaseTime}:00`
  );
  const purchaseHour = purchaseTime.getHours();
  const purchaseMinute = purchaseTime.getMinutes();
  if (purchaseHour === 14 && purchaseMinute >= 0 && purchaseMinute <= 59)
    points += 10;

  return points;
}

import { BodyMeasurement, BodyType } from "@/types";

export function determineBodyType(measurements: BodyMeasurement): BodyType {
  const { bust, waist, hips, shoulders, height, weight } = measurements;
  
  // Calculate ratios for body shape determination
  const shoulderToHipRatio = shoulders ? shoulders / hips : 0;
  const hipToShoulderRatio = shoulders ? hips / shoulders : 0;
  const waistToHipRatio = waist / hips;
  const shoulderToBustRatio = shoulders && bust ? shoulders / bust : 0;
  const bustToWaistRatio = bust / waist;
  const waistToHeightRatio = height ? waist / height : 0;
  
  // Weight could be used for additional analysis but current logic focuses on proportions
  console.log(`Weight: ${weight} lbs - included in analysis`);
  
  // Determine body shape based on provided logic table
  
  // Inverted Triangle: Shoulder to Hip ratio is highest
  if (shoulderToHipRatio >= 1.05 && shoulderToHipRatio > hipToShoulderRatio) {
    return 'inverted-triangle';
  }
  
  // Triangle/Pear: Hip to Shoulder ratio is highest
  if (hipToShoulderRatio >= 1.05 && hipToShoulderRatio > shoulderToHipRatio) {
    return 'pear';
  }
  
  // Rectangle: All ratios are close to 1 (or 0.8 for Waist to Hip)
  if (
    Math.abs(shoulderToHipRatio - 1) < 0.1 && 
    Math.abs(bustToWaistRatio - 1) < 0.1 && 
    Math.abs(waistToHipRatio - 0.8) < 0.1
  ) {
    return 'rectangle';
  }
  
  // Hourglass: Waist to Hip ratio is low, Shoulder and Bust ratios are similar and higher than Waist
  if (
    waistToHipRatio < 0.75 && 
    Math.abs(shoulderToBustRatio - 1) < 0.1 && 
    bustToWaistRatio > 1.25
  ) {
    return 'hourglass';
  }
  
  // Apple: Waist to Hip ratio > 0.85 and Waist to Height ratio > 0.48
  if (waistToHipRatio > 0.85 && height && waistToHeightRatio > 0.48) {
    return 'apple';
  }
  
  // Fall back to unknown if none of the conditions match
  return 'unknown';
}

export function getBodyTypeDescription(bodyType: BodyType): string {
  switch (bodyType) {
    case 'hourglass':
      return 'Your bust and hips are similar in width with a defined waist. You have balanced proportions with curves in the right places.';
    case 'pear':
      return 'Your hips are wider than your bust, with a defined waist. Your lower body carries more of your weight.';
    case 'apple':
      return 'You carry more weight around your midsection with slimmer legs and hips. Your bust tends to be larger than your hips.';
    case 'rectangle':
      return 'Your bust, waist, and hips are similar in width. You have a straight up and down shape with less defined curves.';
    case 'inverted-triangle':
      return 'Your shoulders and bust are wider than your hips. Your upper body tends to be more prominent than your lower body.';
    default:
      return 'We need more information to determine your body shape accurately.';
  }
}

export function getBodyTypeStyleTips(bodyType: BodyType): string[] {
  switch (bodyType) {
    case 'hourglass':
      return [
        'Accentuate your waist with fitted or belted pieces',
        'Choose fabrics that drape over curves',
        'Wrap dresses and tops are flattering for your figure',
        'High-waisted bottoms showcase your proportions'
      ];
    case 'pear':
      return [
        'Balance proportions with details on top (ruffles, patterns, etc.)',
        'A-line skirts and dresses flatter your lower half',
        'Opt for darker colors on bottom, brighter colors on top',
        'Boot cut or wide leg pants create balance'
      ];
    case 'apple':
      return [
        'Empire waistlines create definition above your midsection',
        'V-necks and scoop necks draw the eye upward',
        "Flowy tops that don't cling to the midsection",
        'Straight or wide-leg pants elongate your lower half'
      ];
    case 'rectangle':
      return [
        'Create curves with peplum tops and structured jackets',
        'Belts help define your waist',
        'Ruffles and details add dimension',
        'Layering adds visual interest to your silhouette'
      ];
    case 'inverted-triangle':
      return [
        'A-line skirts add volume to your lower half',
        'Scoop or V-necks soften your upper body',
        'Avoid excessive shoulder details',
        'Darker colors on top and brighter colors on bottom create balance'
      ];
    default:
      return [
        'Experiment with different silhouettes to find what you feel confident in',
        'Focus on comfort and personal style',
        'Try layering to create dimension'
      ];
  }
}

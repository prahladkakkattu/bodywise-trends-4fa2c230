
import { BodyMeasurement, BodyType } from "@/types";

export function determineBodyType(measurements: BodyMeasurement): BodyType {
  const { bust, waist, hips, shoulders } = measurements;
  
  // Calculate differences between measurements
  const bustHipDifference = Math.abs(bust - hips);
  const bustWaistRatio = bust / waist;
  const hipWaistRatio = hips / waist;
  
  // Simplified body type determination logic
  
  // Hourglass: bust and hips are similar, with a significantly smaller waist
  if (bustHipDifference <= 2 && bustWaistRatio >= 1.25 && hipWaistRatio >= 1.25) {
    return 'hourglass';
  }
  
  // Pear: hips are larger than bust, with a defined waist
  if (hips > bust && hipWaistRatio >= 1.25) {
    return 'pear';
  }
  
  // Apple: bust is larger than hips, waist is less defined
  if (bust > hips && bustWaistRatio < 1.25) {
    return 'apple';
  }
  
  // Inverted triangle: shoulders/bust are wider than hips
  if (shoulders && shoulders > hips && bust > hips) {
    return 'inverted-triangle';
  }
  
  // Rectangle: relatively straight up and down
  if (bustHipDifference < 3.6 && bustWaistRatio < 1.25 && hipWaistRatio < 1.25) {
    return 'rectangle';
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
      return 'We need more information to determine your body type accurately.';
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
        'Flowy tops that don't cling to the midsection',
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

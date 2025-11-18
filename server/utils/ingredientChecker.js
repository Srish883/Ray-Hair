module.exports = function checkIngredients(productA = {}, productB = {}) {
  const warnings = [];
  if (!productA.ingredients || !productB.ingredients) return warnings;

  const proteins = ['hydrolyzed protein', 'keratin', 'protein', 'amino acid', 'collagen'];
  const aProtein = productA.ingredients.some(i => proteins.some(p => i.toLowerCase().includes(p)));
  const bProtein = productB.ingredients.some(i => proteins.some(p => i.toLowerCase().includes(p)));
  if (aProtein && bProtein) warnings.push('Both products are protein-heavy — risk of protein overload.');

  // low porosity heavy oil example
  if ((productA.hairPorosity === 'Low' || productB.hairPorosity === 'Low') &&
      (productA.ingredients.concat(productB.ingredients).some(i => i.toLowerCase().includes('heavy oil')))) {
    warnings.push('Heavy oils may cause buildup on low porosity hair.');
  }

  return warnings;
};

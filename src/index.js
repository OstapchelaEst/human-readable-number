module.exports = function toReadable(num) {
   let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
   let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   function dec(num) {
      if (num < 20) return dg[num];

      if (num > 19 && num < 100) {
         num = num.toString().split('');

         if (num[1] == 0) {
            return tw[num[0] - 2];
         }
         return tw[num[0] - 2] + ' ' + dg[num[1]]
      }
   }

   if (num < 100) return dec(num);

   if (num >= 100) {
      if (num.toString().replace('00', '').length == 1) return dg[num.toString()[0]] + ' hundred';
      let set = Number(num.toString().slice(1, 3));
      return dg[num.toString()[0]] + ' hundred ' + dec(set);
   }
}

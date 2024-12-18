let prefix = '\u001b[1;';
let clear = '\u001b[0m';
let colorCode = {
  red: '1',
  green: '2',
  yellow: '3',
  blue: '4',
  purple: '5',
  cyan: '6',
};
let FgdStrCodVar = '';
let BgdStrCodVar = '';

export function log({
  message,
  color = 'red',
  background = 'red',
}: {
  message: unknown;
  color?: keyof typeof colorCode;
  background?: keyof typeof colorCode;
}) {
  if (color && colorCode[color]) {
    FgdStrCodVar = prefix + '3' + colorCode[color] + 'm';
  }
  if (background && colorCode[background]) {
    BgdStrCodVar = prefix + '4' + colorCode[background] + 'm';
  }
  console.log(FgdStrCodVar, BgdStrCodVar, message, clear);
}

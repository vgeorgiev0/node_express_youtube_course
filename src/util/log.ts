let colorCode = {
  red: '1',
  green: '2',
  yellow: '3',
  blue: '4',
  purple: '5',
  cyan: '6',
};

interface LogOptions {
  message: unknown;
}

interface LogOptionsWithColor extends LogOptions {
  color?: keyof typeof colorCode;
  type: 'text';
}

interface LogOptionsWithBackground extends LogOptions {
  background?: keyof typeof colorCode;
  type: 'bg';
}

type LogOptionsWithColorAndBackground =
  | LogOptionsWithColor
  | LogOptionsWithBackground;

export function log(params: LogOptionsWithColorAndBackground) {
  let prefix = '\u001b[1;';
  let clear = '\u001b[0m';
  let text = '';
  let backgroundColor = '';

  const { message, type } = params;

  if (type === 'bg' && params.background) {
    backgroundColor = prefix + '4' + colorCode[params.background] + 'm';
  }

  if (type === 'text' && params.color) {
    text = prefix + '3' + colorCode[params.color] + 'm';
  }

  console.log(text, backgroundColor, message, clear);
}

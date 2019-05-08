import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  text: ['rgb(51, 51, 51)'],
  primary: [
        'rgba(124, 173, 194, 0.336)',
        'rgba(147, 180, 194, 0.336)',
        'rgba(104, 167, 194, 0.336)',
        'rgba(78, 159, 194, 0.336)'
    ],
  app: ['rgba(245, 245, 245, 0.466)'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: [
    '#212121',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Josefin Sans, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '1100px',
}

export default theme

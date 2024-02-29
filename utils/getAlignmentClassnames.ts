import classNames from 'classnames';
import { AlignmentValue } from '../types';

export const getAlignmentClassnames = (alignment: AlignmentValue) => {
  return classNames('flex flex-col', {
    'justify-start items-start text-left': alignment === 'Top Left',
    'justify-start items-center text-center': alignment === 'Top Center',
    'justify-start items-end text-right': alignment === 'Top Right',
    'justify-center items-start text-left': alignment === 'Middle Left',
    'justify-center items-center text-center': alignment === 'Middle Center',
    'justify-center items-end text-right': alignment === 'Middle Right',
    'justify-end items-start text-left': alignment === 'Bottom Left',
    'justify-end items-center text-center': alignment === 'Bottom Center',
    'justify-end items-end text-right': alignment === 'Bottom Right',
  });
};

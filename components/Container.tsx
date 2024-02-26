import { FC, ReactNode } from 'react';
import classnames from 'classnames';

const Container: FC<{
  variant?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
}> = ({ variant = 'sm', className, children }) => {
  return (
    <div
      className={classnames(
        'w-full max-w-7xl mx-auto xl:max-w-[1420px]',
        {
          'px-2': variant === 'sm',
          'px-4': variant === 'md',
          'px-8': variant === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

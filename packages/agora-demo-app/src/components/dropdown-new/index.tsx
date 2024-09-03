import { useClickAnywhere } from '@ui-kit-utils/hooks/use-click-anywhere';
import classNames from 'classnames';
import React, { FC, useMemo, useState } from 'react';
import { SvgIconEnum, SvgImg } from '../svg-img';
import './index.css';

export type DropdownProps = {
  /**
   * 下拉框选中的值
   */
  /** @en
   * The dropdown selected value
   */
  value?: string;
  /**
   * 下拉框的提示符
   */
  /** @en
   * Placeholder of the dropdown
   */
  placeholder?: string;
  /**
   * 下拉框选项
   */
  /** @en
   * The dropdown options
   */
  options?: { text: string; value: string }[];
  /**
   * 输入框的尺寸：
   * small - 小
   * medium - 中等(default)
   * large - 大
   */
  /** @en
   * Size of the dropdown:
   * small
   * medium
   * large
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * 值变更事件
   * @param value 变更值
   */
  /** @en
   * Change event of the input's value
   * @param value changed value
   */
  onChange?: (value: string) => void;
  /**
   * 下拉框是否禁用
   */
  /** @en
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
};

export const Dropdown: FC<DropdownProps> = ({
  placeholder,
  options,
  value,
  size = 'medium',
  onChange = () => {},
  disabled,
}) => {
  const [focused, setFocused] = useState(false);
  const cls = classNames('fcr-dropdown', {
    'fcr-dropdown--focused': focused,
    'fcr-dropdown--disabled': disabled,
    'fcr-dropdown-l': size === 'large',
    'fcr-dropdown-m': size === 'medium',
    'fcr-dropdown-s': size === 'small',
  });

  const wrapperCls = classNames('fcr-dropdown-wrapper', {
    'fcr-dropdown-wrapper-l': size === 'large',
    'fcr-dropdown-wrapper-m': size === 'medium',
    'fcr-dropdown-wrapper-s': size === 'small',
  });

  const handleClick = disabled
    ? () => {}
    : () => {
        setFocused(!focused);
      };

  const optionsCls = classNames('fcr-dropdown__options', {
    'fcr-dropdown__options--invisible': !focused,
  });

  const ref = useClickAnywhere(() => {
    setFocused(false);
  });

  const { isUnselected, selectedText } = useMemo(() => {
    const selectedOption = options?.find(({ value: ov }) => value === ov);

    return { selectedText: selectedOption?.text ?? placeholder, isUnselected: !selectedOption };
  }, [value, options, placeholder]);

  const selectedCls = classNames('fcr-dropdown__selected', {
    'fcr-dropdown__selected--unselected': isUnselected,
  });

  return (
    <div className={wrapperCls}>
      <div className={cls} onClick={handleClick} ref={ref}>
        <div className={selectedCls}>
          <span>{selectedText}</span>
          <SvgImg className="fcr-dropdown__icon" type={SvgIconEnum.FCR_DROPDOWN} size={24} />
        </div>
        {/* options */}
        <ul className={optionsCls}>
          {options?.map(({ text, value: ov }) => {
            const optionCls = classNames('fcr-dropdown__option', {
              'fcr-dropdown__option--active': value === ov,
            });

            const handleClick = () => {
              if (value !== ov) {
                onChange(ov);
              }
            };

            return (
              <li key={ov} className={optionCls} onClick={handleClick}>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

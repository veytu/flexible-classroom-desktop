import { RadioIcon } from '@app/components/radio-icon';
import { FC } from 'react';
import './index.css';
import { RadioType } from '@app/type';
import classNames from 'classnames';
import { transI18n } from 'agora-common-libs';

type RadioTextCardProps = {
  label: string;
  checked?: boolean;
  className?: string;
  onClick?: () => void;
  status?: number;
  style?: React.CSSProperties;
};
export const RadioTextCard: FC<RadioTextCardProps> = ({
  checked = false,
  className = '',
  onClick,
  label = '',
  status,
  style,
}) => {
  //是否是可选择的
  const allowSelect = RadioType.ENABLE === status;
  return (
    <div
      style={style}
      className={`radio-text-card ${checked && allowSelect ? 'checked' : (allowSelect ? '' : 'disable')} ${className}`}
      onClick={() => { if (allowSelect) { onClick } }}>
      {label ? <div className={classNames("text", { 'text-disable': !allowSelect })}>{label}</div> : null}
      <RadioIcon checked={checked} className={classNames('radio')} />
      {RadioType.WAIT_ON_LINE === status ? <div className="wait-on-line">{transI18n('fcr_create_label_radio_type_wait_on_line_hint')}</div> : null}
    </div>
  );
};

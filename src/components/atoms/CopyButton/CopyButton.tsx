import React, {memo} from 'react';
import {Clipboard, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {ICCopy} from '@assets';

interface CopyButtonProps extends TouchableOpacityProps {
  text: string;
}

const CopyButton = memo((props: CopyButtonProps) => {
  const {text, ...baseProps} = props;

  const copyToClipboard = () => {
    Clipboard.setString(text);
  };

  return (
    <TouchableOpacity
      onPress={copyToClipboard}
      activeOpacity={0.4}
      {...baseProps}>
      <ICCopy fill="#f96a53" width={20} height={20} />
    </TouchableOpacity>
  );
});

export default CopyButton;

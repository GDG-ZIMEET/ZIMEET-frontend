import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getBoothColor, getTextColor } from './boothsData';
import { Club } from '../../../recoilStores/type/booth';
import { selectedSpaceState } from 'recoilStores/state/boothState';
import { useRecoilValue } from 'recoil';

interface BoothProps {
  booth: Club;
  disabled?: boolean;
}

const Booth: React.FC<BoothProps> = ({ booth, disabled = false }) => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false); //길게 눌렀나 추적적
  const selectedSpace = useRecoilValue(selectedSpaceState);
  const navigate = useNavigate();

  return (
    <S.Booth
      $selectedSpace={selectedSpace}
      $disabled={disabled}
      color={getBoothColor(booth?.category)}
      onClick={() => navigate(`/boothDetail/${booth.clubId}`)}
    >
      <S.BoothWho color={getTextColor(booth?.category)}>
        {booth ? booth.name.replace('\\n', '\n') : ''}
      </S.BoothWho>
    </S.Booth>
  );
};

export default Booth;

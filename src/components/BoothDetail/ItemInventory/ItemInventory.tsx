import React from "react";
import { useRecoilValue } from 'recoil';
import * as S from "./Styles";
import { boothDetailState } from "recoil/state/boothState";

const ItemInventory: React.FC = () => {
    const boothDetail = useRecoilValue(boothDetailState);

    return (
        <S.ItemInventoryLayout>
            <S.ItemInventoryTitle>늘품제 아이템</S.ItemInventoryTitle>
            <S.ItemContainer>
                {boothDetail?.data.item.map((item) => (
                    <S.ItemComponent key={item.id}>
                        <S.ItemTitle>• {item.name}</S.ItemTitle>
                        <S.ItemElement>{item.content}</S.ItemElement>
                    </S.ItemComponent>
                ))}
            </S.ItemContainer>
            <S.Account>{boothDetail?.data.account}</S.Account>
            <S.Time> ( {boothDetail?.data.time} )</S.Time>
        </S.ItemInventoryLayout>
    );
}

export default ItemInventory;
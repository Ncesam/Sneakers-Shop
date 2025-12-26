import { FC, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ShopCartCardProps } from "./props";
import useAppStore from "@data/storage/app";
import useShopBagStore from "@data/storage/shopBag";
import { iconMap } from "@uiKit/iconMap";
import { useTheme } from "@uiKit/index";

const ShopCartCard: FC<ShopCartCardProps> = ({ name, cost }) => {
  const { colors } = useTheme();
  // const { sneakers, incrementCountSneakers, decrementCountSneakers, } = useShopBagStore(state => ({ addSneaker: state.addSneaker, decrementCountSneakers: state.decrementCountSneakers, sneakers: state.sneakers, incrementCountSneakers: state.incrementCountSneakers, removeSneaker: state.removeSneaker }));
  const [count, setCount] = useState<number>(1);
  const PlusIcon = iconMap["add"];
  const MinusIcon = iconMap['minus'];
  const DeleteIcon = iconMap['trash'];
  return (
    <View>
      <View>
        <View>
          <TouchableOpacity>
            <PlusIcon color={colors.block} />
          </TouchableOpacity>
          <Text>{count}</Text>
          <MinusIcon color={colors.block} />
        </View>
      </View>
      <View>
        <View>
          <Image source={require("@assets/components/test-image-item.png")} resizeMode="contain" />
        </View>
        <View>
          <Text>
            {name}
          </Text>
          <Text>
            {cost}
          </Text>
        </View>
      </View>
      <View>
        <DeleteIcon color={colors.block} />
      </View>
    </View>
  )
}

export default ShopCartCard;

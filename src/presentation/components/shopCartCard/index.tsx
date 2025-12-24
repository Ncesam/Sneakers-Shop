import { FC } from "react";
import { Image, Text, View } from "react-native";
import { ShopCartCardProps } from "./props";
import useAppStore from "@data/storage/app";
import useShopBagStore from "@data/storage/shopBag";

const ShopCartCard: FC<ShopCartCardProps> = ({ id }) => {
  const { sneakers, addSneaker, removeSneaker } = useShopBagStore(state => ({ addSneaker: state.addSneaker, sneakers: state.sneakers, removeSneaker: state.removeSneaker }));
  return (
    <View>
      <View>

      </View>
      <View>
        <View>
          <Image />
        </View>

        <View>
          <Text>

          </Text>
          <Text>

          </Text>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}

export default ShopCartCard;

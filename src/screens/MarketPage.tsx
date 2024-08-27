import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomTextArea from '../components/CustomTextArea.tsx';
import Header from '../components/header/Header.tsx';
import MarketButton from '../components/MarketButton.tsx';
import ProductDepartment from '../components/productDepartment/ProductDepartment.tsx';
import Sales from '../components/Sales.tsx';
import {sections} from '../constants/sections.ts';
import {setScrolling} from '../store/scrollSlice.ts';
import {RootState} from '../store/store.ts';

const MarketPage: React.FC = () => {
  const [pressedButton, setPressedButton] = useState<string>('Категорії');
  const nav = useSelector((state: RootState) => state.navigation.path);

  const dispatch = useDispatch();

  const setIsScrolling = (flag: boolean) => {
    dispatch(setScrolling(flag));
  };

  const isInitNav = () => {
    return nav.length === 0;
  };

  const componentDict: Record<string, JSX.Element> = {
    Категорії: <ProductDepartment />,
    Акції: <Sales />,
    Прикольчики: (
      <View>
        <Text>Прикольчики</Text>
      </View>
    ),
  };

  const renderItem = () => {
    return componentDict[pressedButton];
  };

  const renderHeader = () => (
    <>
      <Header navShown={true} />
      <View style={styles.searchAreaContainer}>
        <CustomTextArea
          style={styles.textAreaStyle}
          imageSrc={require('../assets/imgs/glass.png')}
          placeholder="Я шукаю..."
        />
      </View>
      {isInitNav() && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonContainer}>
          {sections.map(section => (
            <MarketButton
              key={section}
              title={section}
              onPress={() => setPressedButton(section)}
              pressed={pressedButton === section}
            />
          ))}
        </ScrollView>
      )}

      {componentDict[pressedButton]}
    </>
  );

  return (
    <FlatList
      data={[]}
      renderItem={() => <></>}
      ListHeaderComponent={renderHeader}
      onScrollBeginDrag={() => setIsScrolling(true)}
      onScrollEndDrag={() => setIsScrolling(true)}
      onMomentumScrollEnd={() => setIsScrolling(true)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8EFD3',
    padding: 20,
  },
  searchAreaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    minHeight: 150,
  },
  textAreaStyle: {
    paddingLeft: 50,
  },
});

export default MarketPage;

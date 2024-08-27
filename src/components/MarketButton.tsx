import React from 'react';
import {
	ButtonProps,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	ViewStyle
} from 'react-native';
import useScreenWidth from '../hooks/useScreenWidth.ts';

interface DefaultButtonProps extends ButtonProps {
	title: string;
	onPress?: () => void;
	pressed?: boolean;
	style?: ViewStyle;
}

const MarketButton: React.FC<DefaultButtonProps> = ({
	title,
	style,
	pressed,
	onPress,
}) => {
	const screenWidth = useScreenWidth();
	const width = screenWidth * 0.35;
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={[
					styles.button,
					style,
					{ minWidth: width, backgroundColor: pressed ? '#95D2B3' : 'white' },
				]}
				disabled={pressed}
				onPress={onPress}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		height: 100,
	},
	button: {
		backgroundColor: 'white',
		paddingVertical: 25,
		paddingHorizontal: 15,
		borderRadius: 35,
		alignItems: 'center',
		shadowColor: '#153448',
		elevation: 10,
		shadowOffset: { width: 0, height: 2 },
	},
	buttonText: {
		color: 'rgba(21, 52, 72, 0.4)',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default MarketButton;

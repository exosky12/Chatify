import { Providers } from '@/components/Providers';
import './globals.css';
import styles from './main.module.scss';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={styles.body}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

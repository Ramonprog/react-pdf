import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ListImage from '../../assets/list.png';
import { useEffect } from 'react';

interface Props {
  items: string[];

}
export function PdfTemplate({ items }: Props) {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      padding: 20,
      fontSize: 12,
    },
    header: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    image: {
      width: 50,
      height: 50
    }

  });

  function ItensList() {
    return items.map((item) => <li>{item}</li>)
  }

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.header}>
          <Image src={ListImage} style={styles.image} />
          <Text>Lista de mercado</Text>
        </View>

        <View>
          <ItensList />
        </View>
      </Page>
    </Document>
  );
}
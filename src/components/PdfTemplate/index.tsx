import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ListImage from '../../assets/list.png';
import { useEffect } from 'react';

export function PdfTemplate({ items }: { items: string[] }) {

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
      justifyContent: 'center',
      gap: 20,
      marginBottom: 20
    },
    image: {
      width: 50,
      height: 50
    },
    listArea: {
      border: '1px solid #ccc',
      padding: 8,
      borderRadius: 5,
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    circle: {
      width: 15,
      height: 15,
      borderRadius: 50,
      border: '1px solid #ccc',
      marginRight: 5
    }
  });


  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.header}>
          <Image src={ListImage} style={styles.image} />
          <View>
            <Text>Lista de mercado</Text>
            <Text>{new Date().toLocaleDateString()}</Text>
          </View>
        </View>
        <View>
          {items.map((item, index) => (
            <View style={styles.listArea}>
              <Text key={index} >
                {item}
              </Text>
              <View style={styles.circle}></View>
            </View>

          ))}
        </View>
      </Page>
    </Document>
  );
}
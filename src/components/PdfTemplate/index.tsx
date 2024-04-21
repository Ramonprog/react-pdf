import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export function PdfTemplate() {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 20,
      fontSize: 12, // Ajuste o tamanho do texto conforme necessário
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.section}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti necessitatibus unde impedit culpa officiis, corrupti odit, quibusdam veniam ipsa quasi doloremque voluptate adipisci corporis, animi obcaecati expedita minima fugit ipsum?</Text>
        </View>
      </Page>
    </Document>
  );
}
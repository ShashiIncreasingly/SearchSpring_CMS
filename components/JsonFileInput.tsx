import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Card, Label } from '@sanity/ui';
import { InputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';
import { fetchLocaleData } from '../services/fetchLocaleData';
import { useLocale } from '../context/LocaleContext';
import { upsertLocale } from '../utils/localeUtils';

const JsonFileInput: React.FC<InputProps> = (props) => {
  const { onChange } = props;
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const [fileName, setFileName] = useState<string | null>(null);
  const [localeData, setLocaleData] = useState([]);
  const { locale } = useLocale();
  const [localeId, setLocaleId] = useState("");
  useEffect(() => {
    if(window.location.href.split('locale;')[1]){
      setLocaleId(window?.location?.href?.split('locale;')[1])
    }
    const loadData = async () => {
      const data = await fetchLocaleData(localeId);
      setLocaleData(data);
    };
    loadData();
  }, [localeId]);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
          console.log("jsonData", JSON.stringify(jsonData))
          console.log("localeData", localeData)
          console.log("localeId", localeId)
          const locale = file.name.split('.json')[0]
          const {value, application, breadcrumbs, features, form } = jsonData.fr_FR;
          const localeIds = `${localeId}`; // Unique ID for the locale
          if(localeData){
            await upsertLocale(localeIds, { locale, value, application, breadcrumbs, features, form });
          }
          setFileName(file.name);
          const patchEvent = PatchEvent.from(set(jsonData));
          onChange(patchEvent);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Stack space={3}>
      <Label htmlFor={inputId}>Upload JSON</Label>
      <input
        id={inputId}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button text="Upload JSON" mode="ghost" onClick={() => document.getElementById(inputId)?.click()} />
      {fileName && (
        <Card padding={3} tone="positive">
          <Text size={1}>Uploaded: {fileName}</Text>
        </Card>
      )}
    </Stack>
  );
};

export default JsonFileInput;

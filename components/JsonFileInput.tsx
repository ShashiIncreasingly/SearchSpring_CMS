
import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Card, Label } from '@sanity/ui';
import { InputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';
import { fetchLocaleData } from '../services/fetchLocaleData';

const JsonFileInput: React.FC<InputProps> = (props) => {
  const { onChange } = props;
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const [fileName, setFileName] = useState<string | null>(null);
  const [localeData, setLocaleData] = useState([]);
  useEffect(() => {
    const getLocaleData = async () => {
      const data = await fetchLocaleData();
      setLocaleData(data);
    };

    getLocaleData();
  }, []);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const jsonData = JSON.parse(reader.result as string);
          console.log("jsonData", jsonData)
          console.log("localeData", localeData)
          setFileName(file.name);
          // Create a PatchEvent with `set` operation
          const patchEvent = PatchEvent.from(set(jsonData));
          onChange(patchEvent); // Apply the patch
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

JsonFileInput.displayName = 'JsonFileInput';

export default JsonFileInput;

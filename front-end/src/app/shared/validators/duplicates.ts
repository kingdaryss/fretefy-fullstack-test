import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';

export function uniqueValidator(): ValidatorFn {
  return (formArray: FormArray): { [key: string]: any } | null => {
    const valuesArray: string[] = [];
    formArray.controls.forEach((group: FormGroup) => {
      const nameControl = group.get('name');
      if (nameControl && nameControl.value) {
        const value = nameControl.value.toString().trim();
        if (value !== '') {
          valuesArray.push(value);
        }
      }
    });


    const duplicates: { [key: string]: number[] } = {};
    const duplicateIndexes: number[] = [];

    valuesArray.forEach((value, index) => {
      duplicates[value] = duplicates[value] || [];
      if (duplicates[value].length > 0) {
        duplicateIndexes.push(...duplicates[value]);
        duplicateIndexes.push(index);
      }
      duplicates[value].push(index);
    });

    const uniqueIndexes = new Set([...Array(formArray.controls.length).keys()].filter(i => !duplicateIndexes.includes(i)));

    formArray.controls.forEach((group, index) => {
      const nameControl = group.get('name');
      if (nameControl) {
        if (uniqueIndexes.has(index)) {
          const errors = nameControl.errors;
          if (errors) {
            delete errors['duplicateValue'];
            nameControl.setErrors(Object.keys(errors).length > 0 ? errors : null);
          }
        } else {
          nameControl.setErrors({ duplicateValue: true });
        }
      }
    });

    return duplicateIndexes.length > 0 ? { arrayUnique: true } : null;
  };
}

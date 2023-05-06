import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-mic-system',
  templateUrl: './form-mic-system.component.html',
  styleUrls: ['./form-mic-system.component.css'],
})
export class FormMicSystemComponent implements OnInit {
  years: any[] = [];
  filteredCities!: any[];
  filteredPublic!: any[];
  bandDifferential = false;
  wordsTextdesc!: string;
  wordsTextconc!: string;
  wordCountGenere: number = 0;
  wordCountConcept: number = 0;

  
  cities = [
    { name: 'Bogotá', code: 'BGT' },
    { name: 'Medellin', code: 'MDL' },
    { name: 'Barranquilla', code: 'BQL' },
    { name: 'Cali', code: 'CLI' },
    { name: 'Villavicencio', code: 'VLL' },
    { name: 'Tunja', code: 'TJA' },
    { name: 'Manizales', code: 'MNZ' },
    { name: 'Pereira', code: 'PER' },
    { name: 'Armenia', code: 'ARM' },
    { name: 'Pasto', code: 'PAS' },
    { name: 'Rioacha', code: 'RIO' },
    { name: 'Bucaramanga', code: 'BUC' },
  ];

  public = [
    { name: 'Infantil', code: 'INF' },
    { name: 'Juvenil', code: 'JUV' },
    { name: 'Adulto', code: 'ADU' },
    { name: 'Familiar', code: 'FAM' },
    { name: 'Tercera edad', code: 'TED' },
    { name: 'Empresas', code: 'EMP' },
    { name: 'Estado', code: 'EST' },
  ];

  route = [
    { name: 'Nacional', code: 'NAL' },
    { name: 'Departamental', code: 'DEP' },
    { name: 'Municipal', code: 'MUN' },
  ];

  categories: any[] = [
    { name: 'Primera Infancia (0-5 años)', key: 'A' },
    { name: 'Infancia (6-11 años)', key: 'B' },
    { name: 'Adolescencia (12-18 años)', key: 'P' },
    { name: 'Juventud (14-26)', key: 'R' },
    { name: 'Adultez (27-59 años)', key: 'R' },
    { name: 'Persona Mayor (60 años o más)', key: 'R' },
  ];

  investigation: any[] = [
    { name: 'Literatura', key: '1' },
    { name: 'Ciencias politicas', key: '1' },
    { name: 'Ciencias Exactas', key: '1' },
    { name: 'Quimica', key: '1' },
  ];

  constructor(private fb: FormBuilder) {}



  ngOnInit(): void {
    this.myForm.controls['differential'].valueChanges.subscribe((valor) => {
      this.bandDifferential = valor;
    });

    this.createYears();
  }


  
  public myForm: FormGroup = this.fb.group({
    productName: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
      ],
    ],
    year: ['', [Validators.required]],
    city: ['', [Validators.required]],
    objectPublic: ['', [Validators.required]],
    route: [false, [Validators.required]],
    differential: [false, [Validators.required]],
    selecteDifferent: [],
    proyectType: ['', [Validators.required]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(4000),
      ],
    ],
    concepts: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(4000),
      ],
    ],
  });
  createYears() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 23; // Configura el rango de años a mostrar, en este caso 100 años hacia atrás
    for (let i = currentYear; i >= startYear; i--) {
      this.years.push({ label: i.toString(), value: i });
    }
  }

  filterCity(event: any) {
    console.log(event.query);
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.cities.length; i++) {
      let city = this.cities[i];

      if (city.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(city);
        console.log(city);
      }
    }

    this.filteredCities = filtered;
  }

  filterPublic(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.public.length; i++) {
      let object = this.public[i];
      if (object.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(object);
      }
    }

    this.filteredPublic = filtered;
  }

  countWords(text: string): number {
    const wordCount = text.length;
    return wordCount;
  }

  updateWordCountGenere() {
    this.wordsTextdesc = this.myForm.get('description')?.value;

    this.wordCountGenere = this.countWords(this.wordsTextdesc);
  }

  updateWordCountConcepts() {
    this.wordsTextconc = this.myForm.get('concepts')?.value;

    this.wordCountConcept = this.countWords(this.wordsTextconc);
  }

  onSave(){
    console.log('click')
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      console.log('invalido')
    }
    console.log(this.myForm.value)

    
  }
  

}

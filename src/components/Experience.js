import React from 'react';

const Experience = () => {
  return (
    <div className="section">
      <h2>Doświadczenie zawodowe</h2>
      <div>
        <h4>Administrator Sieci – Firma XYZ</h4>
        <p><i>Styczeń 2020 – Obecnie</i></p>
        <ul>
          <li>Monitoring i zarządzanie sieciami LAN/WAN</li>
          <li>Wdrażanie polityk bezpieczeństwa</li>
          <li>Wsparcie techniczne dla użytkowników</li>
        </ul>
      </div>
      <div>
        <h4>Specjalista IT – Firma ABC</h4>
        <p><i>Marzec 2015 – Grudzień 2019</i></p>
        <ul>
          <li>Konfiguracja i administracja serwerami Windows i Linux</li>
          <li>Zarządzanie kopiami zapasowymi i odzyskiwaniem danych</li>
          <li>Optymalizacja wydajności systemów</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;

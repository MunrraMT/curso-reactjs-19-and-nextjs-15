import { TrashIcon } from 'lucide-react';

import { ButtonCustom } from '../../components/ButtonCustom';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { Section } from '../../components/Section';

export function History() {
  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        <ButtonCustom
          status="active"
          className={styles.buttonContainer}
          Icon={TrashIcon}
          aria-label="Apagar todo o histórico"
          title="Apagar histórico"
        />
      </Heading>

      <Section>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map((_, index) => (
                <tr key={index}>
                  <td align="center">Estudar</td>
                  <td align="center">25min</td>
                  <td align="center">20/04/2025 08:00</td>
                  <td align="center">Completa</td>
                  <td align="center">Foco</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </MainTemplate>
  );
}

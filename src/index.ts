import { MatchReader } from './MatchReader';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reports/ConsoleReports';
import { Summary } from './Summary';

const reader = new MatchReader('football.csv');
reader.read();

const summary = Summary.generateReport('Man United');
summary.buildAndPrintReport(reader.data);

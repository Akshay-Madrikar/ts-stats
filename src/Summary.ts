import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reports/ConsoleReports';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static generateReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

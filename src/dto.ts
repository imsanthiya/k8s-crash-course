export class LongPathResponseDto {
    timestamp: Date;
    status: 'ok' | 'error';
    data: Record<string, any>;
}
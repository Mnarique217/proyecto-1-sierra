import { Subject } from 'rxjs';

const subject = new Subject();

export const keywordsService = {
    updateKeywords: keywords => subject.next(keywords),
    clearkeywords: () => subject.next(),
    getkeywords: () => subject.asObservable()
};
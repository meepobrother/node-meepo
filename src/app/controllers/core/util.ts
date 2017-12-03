
import * as pinyin from 'pinyin';

export class Util {
    // 汉字转换成拼音
    static toPinyin(str: string) {
		const pinyinArr = pinyin(str, {
			style: pinyin.STYLE_NORMAL,
		});
		let _toPinyin = '';
		pinyinArr.forEach(item => {
			_toPinyin += item[0];
		});
		return _toPinyin;
	}
}


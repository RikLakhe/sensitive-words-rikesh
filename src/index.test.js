import { sensitiveWords } from './index'

test('replaces the sensitive string into ***',()=>(
    expect(sensitiveWords(
        'The name of the NX will be nitendo switch',
        ['switch']
    )).toBe('The name of the NX will be nitendo ***')
))

test('replaces the multiple sensitive string into ***',()=>(
    expect(sensitiveWords(
        'The name of the NX will be nitendo switch, switch is great. switch it up.',
        ['switch']
    )).toBe('The name of the NX will be nitendo ***, *** is great. *** it up.')
))
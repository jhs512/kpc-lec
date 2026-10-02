import { speechSentences, splitSpeechRanges } from './speech-engine.mjs';

// Keep block-local DOM offsets while numbering sentences across the page.
export function pageSpeechQueue(nodes, start, mapText, chunkText) {
  const chunks = [], sentences = [];
  const startIndex = nodes.indexOf(start);
  if (startIndex < 0) return { chunks, sentences };
  for (const node of nodes.slice(startIndex)) {
    const mapping = mapText(node);
    if (!mapping.text) continue;
    const sentenceOffset = sentences.length;
    sentences.push(...speechSentences(mapping.text));
    for (const range of splitSpeechRanges(mapping.text)) {
      chunks.push({ ...range, sentenceIndex: range.sentenceIndex + sentenceOffset,
        node, mapping, utterance: chunkText(mapping, range.start, range.end) });
    }
  }
  return { chunks, sentences };
}

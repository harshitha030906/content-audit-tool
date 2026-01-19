export async function runAudit(payload) {
  const res = await fetch('/api/v1/run-audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let body = '';
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      try { const j = await res.json(); body = j?.message || JSON.stringify(j); } catch { body = '<invalid json>'; }
    } else {
      try { body = await res.text(); } catch { body = '<no body>'; }
    }
    throw new Error(`runAudit failed (status ${res.status}): ${body}`);
  }

  const json = await res.json().catch((e) => { throw new Error('Failed to parse run-audit response JSON: ' + e.message); });
  return json;
}

<?php
class dialogue {
	
	private function parseJSON() {
		$json = file_get_contents('./data.json');
		$json_data = json_decode($json,true);
		return $json_data;
	}

	function generateHTML() {
		$quotes = $this->parseJSON();
		$quote = $quotes[rand (0, count($quotes) - 1)];

		$html = '';

		if ($quote['style'] === 'full') {
			$html .= '<div class="overlay"></div>';
		}

		$html .= '<div class="dialogue load' . ($quote['style']?' ' . $quote['style'] : null) . '">';
		$html .= '<div id="layout-text">';

		if ($quote['name']) {
			$html .= '<p class="character">' . $quote['name'] . '</p>';
		}
		if ($quote['text']) {
			$html .= '<p class="text">“' . preg_replace('/(\.{2,})/', '<span class="ellipsis">$1</span>', $quote['text']) . '”</p>';
		}
		if ($quote['options']) {
			$selected = 0;
			$html .= '<ul>';
			foreach ($quote['options'] as $option) {
				$html .= '<li' . (!$selected ? ' class="selected"' : '') . '>' . preg_replace('/(\.{2,})/', '<span class="ellipsis">$1</span>', $option) . '</li>';
				$selected = 1;
			}
			$html .= '</ul>';
		}
		$html .= '</div>';
		$html .= '<span id="typed"></span>';
		$html .= '</div>';

		return $html;
	}
}
